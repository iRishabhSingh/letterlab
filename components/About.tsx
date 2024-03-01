"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Link,
} from "@nextui-org/react";

import { TwitterIcon, GithubIcon, DiscordIcon, HeartFilledIcon } from "./icons";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col gap-2">
      <Button
        variant="light"
        color="warning"
        onPress={onOpen}
        className="max-w-fit font-bold"
      >
        About
      </Button>
      <Modal
        isOpen={isOpen}
        backdrop={"opaque"}
        placement={"bottom-center"}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 logo">
                About
              </ModalHeader>
              <ModalBody>
                <div className="flex gap-5">
                  <Link href="https://twitter.com/iRishabhSinghh">
                    <TwitterIcon />
                  </Link>
                  <Link
                    // color="foreground"
                    href="https://github.com/iRishabhSingh"
                  >
                    <GithubIcon />
                  </Link>
                  <Link
                    // color="warning"
                    href="https://discord.com/iRishabhSingh"
                  >
                    <DiscordIcon />
                  </Link>
                  <Link
                    // color="danger"
                    href="https://instagram.com/iRishbhSingh"
                  >
                    <HeartFilledIcon />
                  </Link>
                </div>
                <h6 className="text-sm font-bold">
                  Welcome to <span className="logo">Letter&apos;s Lab</span>
                </h6>
                <p className="text-xs">
                  We&apos;re here to simplify your text tasks and boost your
                  productivity.
                  <br />
                  Have feedback or suggestions? We&apos;re all ears!
                </p>
                <p className="text-xs">
                  Best,
                  <br />
                  Team <span className="logo">Letter&apos;s Lab</span>
                </p>
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose}>Close</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
