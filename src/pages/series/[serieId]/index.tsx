import dynamic from "next/dynamic";

export default dynamic(() => import("../../../SeriePage"), { ssr: false });
