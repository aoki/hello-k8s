import { K8sViewer } from "@socialgouv/react-k8s-viewer";
import manifests from "../manifests.json";

export default function Home() {
  return (
    <div style={{ width: "100vh", height: "100vh" }}>
      <K8sViewer manifests={manifests} />
    </div>
  );
}
