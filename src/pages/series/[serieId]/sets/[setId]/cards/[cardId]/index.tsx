import dynamic from "next/dynamic";

export default dynamic(() => import("../../../../../../../CardPage"), {
  ssr: false,
});
