import Color from "@/app/styles/Color";
import { StyleSheet } from "react-native";

export default {
    Auth: {
        light: StyleSheet.create({
            container: {
                marginHorizontal: 20,
                borderBottomWidth:1,
                padding:2,
            },
            input: {
                padding: 10,
            }
        }),
        dark: StyleSheet.create({
            container: {
                marginLeft: 10,
            },
            input: {
                padding: 10,
            }
        }),
      },
    RotaX:
    {
        light: StyleSheet.create({
            container: {
                borderColor: Color.IconColor,
                borderWidth: 1,
                borderRadius: 30,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 15,
                backgroundColor: '#FFFFFF',
            },
            input: {
                padding: 10,
                color: '#000000',
            }
        }),
        dark: StyleSheet.create({
            container: {
                borderColor: Color.IconColor,
                borderWidth: 1,
                borderRadius: 30,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 15,
                backgroundColor: '#1E293B',
            },
            input: {
                padding: 10,
                color: '#F8FAFC',
            }
        })
    }
}