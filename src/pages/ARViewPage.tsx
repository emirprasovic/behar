import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import * as THREE from "three";

const ARViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<any>(null);
  const [selectedLandmark, setSelectedLandmark] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb); // Sky blue

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight,
    );
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 10);
    scene.add(directionalLight);

    // Ground
    const groundGeometry = new THREE.PlaneGeometry(50, 50);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x7cb342 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);

    // Mosque (main building)
    const mosqueBase = new THREE.BoxGeometry(4, 3, 4);
    const mosqueMaterial = new THREE.MeshStandardMaterial({ color: 0xf5deb3 });
    const mosque = new THREE.Mesh(mosqueBase, mosqueMaterial);
    mosque.position.set(0, 1.5, 0);
    scene.add(mosque);

    // Dome
    const domeGeometry = new THREE.SphereGeometry(
      2.2,
      32,
      16,
      0,
      Math.PI * 2,
      0,
      Math.PI / 2,
    );
    const domeMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const dome = new THREE.Mesh(domeGeometry, domeMaterial);
    dome.position.set(0, 3, 0);
    scene.add(dome);

    // Minaret
    const minaretGeometry = new THREE.CylinderGeometry(0.4, 0.4, 6, 8);
    const minaretMaterial = new THREE.MeshStandardMaterial({ color: 0xf5deb3 });
    const minaret = new THREE.Mesh(minaretGeometry, minaretMaterial);
    minaret.position.set(3, 3, 3);
    scene.add(minaret);

    // Minaret top
    const minaretTop = new THREE.ConeGeometry(0.5, 1, 8);
    const minaretTopMesh = new THREE.Mesh(minaretTop, domeMaterial);
    minaretTopMesh.position.set(3, 6, 3);
    scene.add(minaretTopMesh);

    // Clock Tower (Sahat Kula)
    const towerBase = new THREE.BoxGeometry(1.5, 5, 1.5);
    const towerMaterial = new THREE.MeshStandardMaterial({ color: 0xd2691e });
    const tower = new THREE.Mesh(towerBase, towerMaterial);
    tower.position.set(-5, 2.5, -3);
    scene.add(tower);

    // Tower roof
    const towerRoof = new THREE.ConeGeometry(1.2, 2, 4);
    const towerRoofMesh = new THREE.Mesh(
      towerRoof,
      new THREE.MeshStandardMaterial({ color: 0x8b0000 }),
    );
    towerRoofMesh.position.set(-5, 5.5, -3);
    scene.add(towerRoofMesh);

    // Buildings around
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 12;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const height = 2 + Math.random() * 2;

      const buildingGeometry = new THREE.BoxGeometry(2, height, 2);
      const buildingMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color().setHSL(0.1, 0.3, 0.5 + Math.random() * 0.2),
      });
      const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
      building.position.set(x, height / 2, z);
      scene.add(building);
    }

    // Camera position
    camera.position.set(10, 8, 15);
    camera.lookAt(0, 2, 0);

    // Animation
    let autoRotate = true;
    const animate = () => {
      requestAnimationFrame(animate);

      if (autoRotate) {
        scene.rotation.y += 0.003;
      }

      renderer.render(scene, camera);
    };
    animate();

    sceneRef.current = { scene, camera, renderer, autoRotate: true };

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight,
      );
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  const handleZoomIn = () => {
    if (sceneRef.current) {
      sceneRef.current.camera.position.multiplyScalar(0.9);
    }
  };

  const handleZoomOut = () => {
    if (sceneRef.current) {
      sceneRef.current.camera.position.multiplyScalar(1.1);
    }
  };

  const handleReset = () => {
    if (sceneRef.current) {
      sceneRef.current.scene.rotation.y = 0;
      sceneRef.current.camera.position.set(10, 8, 15);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Close button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 right-4 z-10 cursor-pointer rounded-full bg-white/90 p-2 shadow-lg transition-colors hover:bg-white"
      >
        <X className="h-6 w-6" />
      </button>

      {/* 3D Canvas */}
      <div ref={containerRef} className="h-full w-full" />

      {/* Info card */}
      <div className="absolute bottom-32 left-10 max-w-xs rounded-lg bg-white/95 p-4 shadow-xl">
        <h3 className="mb-1 text-lg font-bold">Gazi Husrev-beg Mosque</h3>
        <p className="text-sm text-gray-700">Built in 1530...</p>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        <button
          onClick={handleZoomIn}
          className="rounded-full bg-white/90 p-3 shadow-lg transition-colors hover:bg-white"
        >
          <ZoomIn className="h-5 w-5" />
        </button>
        <button
          onClick={handleZoomOut}
          className="rounded-full bg-white/90 p-3 shadow-lg transition-colors hover:bg-white"
        >
          <ZoomOut className="h-5 w-5" />
        </button>
        <button
          onClick={handleReset}
          className="rounded-full bg-white/90 p-3 shadow-lg transition-colors hover:bg-white"
        >
          <RotateCcw className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ARViewPage;
