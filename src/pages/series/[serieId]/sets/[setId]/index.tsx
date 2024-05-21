import dynamic from "next/dynamic";

export default dynamic(() => import("../../../../../SetPage"), { ssr: false });
