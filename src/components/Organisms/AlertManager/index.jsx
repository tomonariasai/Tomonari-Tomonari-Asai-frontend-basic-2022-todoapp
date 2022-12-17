import React, { useEffect } from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert";

const AlertManager = () => {
  /* コンポーネント関数内 */
  //Contextを取得
  const AlertHandlerContext = useAlertHandlerContext();

  useEffect(() => {
    setTimeout(() => {
      AlertHandlerContext.closeAlert();
    }, 5000);
  }, [AlertHandlerContext]);

  return (
    <Alert
      alertText={AlertHandlerContext.errorText}
      visible={AlertHandlerContext.visible}
    />
  );
};
export default AlertManager;
