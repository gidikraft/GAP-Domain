import { SafeAreaView, StyleSheet, useWindowDimensions, View } from 'react-native';
import React, { useState } from 'react';
import { BoldText, NormalText } from '../components/CustomText';
import { palette } from '../themes/palette';
import Spacer from '../components/Spacer';
import AppDashboard from '../components/AppDashboard';
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import {
    SceneMap,
    TabBar,
    TabBarIndicator,
    TabView,
} from "react-native-tab-view";
import PrimaryInput from '../components/CustomInput';


const History = () => {
    const daysdata = [{ value: 30 }, { value: 80 }, { value: 60 }, { value: 50 }, { value: 100 }, { value: 80 }];
    const weeksdata = [{ value: 10 }, { value: 40 }, { value: 100 }, { value: 80 }, { value: 30 }];
    const data = [{ value: 50 }, { value: 80 }, { value: 60 }, { value: 120 }, { value: 70 }, { value: 80 }];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const weeks = ["1", "2", "3", "4", "5"];

    const layout = useWindowDimensions();

    const [searchHidden, setSearchHidden] = useState(false);
    const [searchText, setSearchText] = useState("");

    const FirstRoute = () => (
        <View style={{ flex: 1, backgroundColor: palette.white, justifyContent: "center" }} >
            <LineChart
                data={daysdata}
                areaChart
                xAxisLabelTexts={days}
                xAxisThickness={0}
                yAxisThickness={0}
                curved
                hideRules={true}
                showVerticalLines
                yAxisLabelWidth={1}
                hideYAxisText
                height={300}
            />
        </View>
    );

    const SecondRoute = () => (
        <View style={{ flex: 1, backgroundColor: palette.white, justifyContent: "center" }} >
            <LineChart
                data={weeksdata}
                areaChart
                xAxisLabelTexts={weeks}
                xAxisThickness={0}
                yAxisThickness={0}
                curved
                hideRules={true}
                showVerticalLines
                yAxisLabelWidth={1}
                hideYAxisText
                height={300}
                spacing={80}
            />
        </View>
    );

    const ThirdRoute = () => (
        <View style={{ flex: 1, backgroundColor: palette.white, justifyContent: "center" }} >
            <LineChart
                data={data}
                areaChart
                xAxisLabelTexts={months}
                xAxisThickness={0}
                yAxisThickness={0}
                curved
                hideRules={true}
                showVerticalLines
                yAxisLabelWidth={1}
                hideYAxisText
                height={300}
                spacing={65}
                dataPointColor={palette.success}
            />
        </View>
    );

    const FourthRoute = () => (
        <View style={{ flex: 1, backgroundColor: palette.white, justifyContent: "center" }} />
    );

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
        fourth: FourthRoute,
    });

    const [index, setIndex] = useState(0);
    const [routes] = React.useState([
        { key: "first", title: "Day" },
        { key: "second", title: "Week" },
        { key: "third", title: "Month" },
        { key: "fourth", title: "Year" },
    ]);

    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={styles.container} >
                <Spacer space="md" />

                <AppDashboard
                    username="Cassandra"
                    openDrawer={() => { }}
                    openSearch={() => { 
                        setSearchHidden(!searchHidden)
                    }}
                />
                <Spacer space="md" />

                {searchHidden === true && 
                    <PrimaryInput
                        value={searchText}
                        onChangeText={(text) => setSearchText(text)}
                        leftIcon
                    />
                }
                <Spacer space="xl" />

                <View style={{ paddingHorizontal: 20 }} >
                    <NormalText caption="Your balance" style={styles.balance} />
                    <Spacer space="sm" />

                    <BoldText caption="$ 24,165.00" style={styles.amount} />
                    <Spacer space="xl" />
                </View>

                <View style={styles.graphLayout} >
                    <Spacer space="xxl" />

                    <BoldText caption="Reports" style={styles.report} />
                    <Spacer space="lg" />

                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        onIndexChange={setIndex}
                        initialLayout={{ width: layout.width }}
                        keyboardDismissMode="none"
                        lazy
                        renderTabBar={(props) => (
                            <TabBar
                                activeColor={palette.textColor}
                                contentContainerStyle={{margin: 0, paddingHorizontal: 20, width: "100%"}}
                                inactiveColor={palette.textColor}
                                indicatorStyle={{ backgroundColor: palette.white,  }}
                                labelStyle={{ textTransform: "none" }}
                                pressColor="transparent"
                                renderIndicator={(indicatorProps) => {
                                    const width = indicatorProps.getTabWidth(index) ;
                                    return <TabBarIndicator {...indicatorProps} width={width} />;
                                }}
                                renderLabel={({ route, focused }) => (
                                    <View style={{ backgroundColor: focused ? palette.tabIndicator : palette.transparent, borderRadius: 20 }} >
                                        <NormalText caption={route.title} style={{ fontSize: 14, color: focused ? palette.cardText : palette.textColor, }} />
                                    </View>
                                )}
                                style={{ backgroundColor: palette.transparent, elevation: 4, shadowColor: "transparent", }}
                                tabStyle={{ marginRight: 20, height: 25, padding: 0, width: "100%", justifyContent: 'flex-start' }}
                                {...props}
                            />
                        )}
                    />
                </View>

            </View>
        </SafeAreaView>
    );
};

export default History;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: palette.primaryColor,
    },
    container: {
        flex: 1,
        // paddingHorizontal: 20,
    },
    balance: {
        color: palette.white,
    },
    amount: {
        fontSize: 40,
        color: palette.white,
    },
    graphLayout: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: palette.white,
        flex: 1,
        paddingHorizontal: 20
    },
    report: {
        fontSize: 20,
    },
});