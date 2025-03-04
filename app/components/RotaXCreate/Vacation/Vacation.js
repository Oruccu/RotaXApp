import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import getStyles from "./VacationStyles";
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';
import IconMaterialCommunity from '../../Icons/IconExpo/IconMaterialCommunity';
import Color from '@/app/styles/Color';
const Vacation = ({ vacationDay, hangleTouchMaps }) => {
    const { t } = useTranslation();
    const mode = useSelector((state) => state.settings?.mode?.toLowerCase()) || "light";
    const styles = getStyles(mode);
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.text}>{vacationDay}</Text>
                <TouchableOpacity onPress={hangleTouchMaps}>
                    <IconMaterialCommunity iconName={"google-maps"} color={Color.Primary} />
                </TouchableOpacity>
            </View>
           
        </View>
    )
}

export default Vacation