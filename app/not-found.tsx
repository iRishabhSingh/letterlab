import TextArea from "@/components/TextArea/TextArea";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function Home() {
  return (
    <main className="lg:p-24 md:p-12 sm:p-8 max-sm:p-4 min-w-unit-sm">
      <div className="mb-8 flex justify-center">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="Letter's Lab"
              height={40}
              radius="sm"
              src={"/logo.webp"}
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md logo">Letter&apos;s Lab</p>
              <p className="text-small text-default-500">
                letterslab.vercel.app
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              Oops... it seems like the URL provided is invalid. However,
              nothing can hinder us from assisting you in simplifying your text.
            </p>
          </CardBody>
          <Divider />
          <CardFooter className="flex items-center">
            Or go back to&nbsp;
            <Link showAnchorIcon href="/">
              <span className="logo">Letter&apos;s Lab</span>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <TextArea />
    </main>
  );
}
