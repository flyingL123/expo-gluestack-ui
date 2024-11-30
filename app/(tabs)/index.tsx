import { Center } from "@/components/ui/center";
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Menu, MenuItem, MenuItemLabel } from "@/components/ui/menu";
import { Fab, FabIcon } from "@/components/ui/fab";
import { CheckIcon, ChevronDownIcon, CloseIcon, Icon, MenuIcon } from "@/components/ui/icon";
import { useState } from "react";
import { SafeAreaView, View } from "react-native";

export default function HomeScreen() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <SafeAreaView className="bg-gray-500 h-[50%]">
        <Menu
          className="bg-white"
          placement="top right" 
          offset={15}
          onOpen={() => setMenuOpen(true)}
          onClose={() => setMenuOpen(false)}
          trigger={({ ...triggerProps }) => {
            return (
              <Fab {...triggerProps}
                className="w-20 h-20 bg-white active:bg-white"
                placement="bottom right"
              >
                { menuOpen ?
                  <FabIcon as={ChevronDownIcon} className="w-8 h-8 text-typography-700" /> :
                  <FabIcon as={MenuIcon} className="w-8 h-8 text-typography-700" /> 
                }
              </Fab>
            );
          }}
        >
          <MenuItem
            key="Send"
            className="bg-blue-500"
            textValue="Send"
            onPress={() => console.log('press send')}
          >
            <Icon as={CheckIcon} size="xl" className="mr-2 text-white" />
            <MenuItemLabel size="xl" className="text-white">Send the message to someone</MenuItemLabel>
          </MenuItem>
          <MenuItem
            key="Retake"
            className="bg-red-500"
            textValue="Retake"
            onPress={() => console.log('press retake')}
          >
            <Icon as={CloseIcon} size="xl" className="mr-2 text-white" />
            <MenuItemLabel size="xl" className="text-white">Retake</MenuItemLabel>
          </MenuItem>
        </Menu>
    </SafeAreaView>
  );
}
