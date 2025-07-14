'use client'

import { useState } from "react";
import { Button } from "../ui/button";
import AuthDialog from "../ModalAuth";

const LoginButton = () => {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setOpenLogin(true)}>
        Login
      </Button>

      <AuthDialog open={openLogin} onOpenChange={setOpenLogin} />
    </>
  )
}

export default LoginButton;