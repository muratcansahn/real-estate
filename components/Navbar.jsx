import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => {
  const MenuListItems = [
    {
      href: "/",
      icon: <FcHome />,
      text: "Home",
    },
    {
      href: "/search",
      icon: <BsSearch />,
      text: "Search",
    },
    {
      href: "/search?purpose=for-sale",
      icon: <FcAbout />,
      text: "Buy Property",
    },
    {
      href: "/search?purpose=for-rent",
      icon: <FiKey />,
      text: "Rent Property",
    },
  ];

  return (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
      <Box fontSize="3xl" color="blue.400" fontWeight="bold">
        <Link href="/" paddingLeft="2">
          Realtor
        </Link>
      </Box>
      <Spacer />
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant="outlined"
          color="red.400"
        />
        <MenuList>
          {MenuListItems.map((item) => (
            <Link href={item.href} passHref key={item.href}>
              <MenuItem icon={item.icon}>{item.text}</MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Navbar;
