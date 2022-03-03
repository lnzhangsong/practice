import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Progress, Tag, Text, Button } from "@chakra-ui/react";

interface IProps {
  used: number;
  sum: number;
}

function SideBar(props: IProps) {
  const { used, sum } = props;
  const [rate] = useState(used / sum);

  const nav = useNavigate();

  return (
    <div className="flex flex-col justify-between w-full">
      <header>
        <Box className="p-2 m-2 flex justify-around items-center border rounded-lg">
          <Text fontSize="xl">LOGO</Text>
        </Box>
      </header>
      <section className="h-full">
        <Box className="h-full mx-2 p-2 flex flex-col border rounded-lg space-y-2.5">
          <Button onClick={() => nav("home")}> 所有文件 </Button>
          <Button onClick={() => nav("last_used")}> 近期使用 </Button>
          <Button onClick={() => nav("manage")}> 同步任务 </Button>
          <Button onClick={() => nav("analysis")}> 用量分析 </Button>
        </Box>
      </section>
      <footer>
        <Box className="p-3 h-20 m-2 flex flex-col justify-between border rounded-lg">
          <div className="flex justify-between">
            <Tag> 使用量 </Tag> {used} / {sum}
          </div>
          <Progress colorScheme="green" value={rate * 100} />
        </Box>
      </footer>
    </div>
  );
}

export default SideBar;
