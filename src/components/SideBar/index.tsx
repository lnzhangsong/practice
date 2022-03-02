import { useState } from "react";

import { Box, Progress, Tag, Avatar, Text } from "@chakra-ui/react";

interface IProps {
  used: number;
  sum: number;
}

function SideBar(props: IProps) {
  const { used, sum } = props;
  const [rate] = useState(used / sum);

  return (
    <div className="flex flex-col justify-between w-full">
      <header className="">
        <Box className="p-2 m-2 flex justify-around items-center border rounded-lg">
          <Avatar bg="teal.500" />
          <Text fontSize="4xl">LOGO</Text>
        </Box>
      </header>
      <section className="h-full">
        <Box className="h-full mx-2 p-2 flex justify-around items-center border rounded-lg"></Box>
      </section>
      <footer>
        <Box className="p-3 h-20 m-2 flex flex-col justify-between border rounded-lg">
          <div className="flex justify-between">
            {" "}
            <Tag>使用量 </Tag> {used} / {sum}{" "}
          </div>
          <Progress colorScheme="green" value={rate * 100} />
        </Box>
      </footer>
    </div>
  );
}

export default SideBar;
