import dynamic from "next/dynamic";

export default dynamic(() => import("../../SeriesPage"), { ssr: false });
