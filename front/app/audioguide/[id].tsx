import React, { useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import { theme } from "../../src/theme/theme";
import AudioguideScreen from "../../src/screens/AudioguideScreen";

export default function AudioguideRoute() {
    const params = useLocalSearchParams<{ id?: string }>();
    const tourId = useMemo(() => Number(params.id), [params.id]);

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: "Audioguide",
                    headerStyle: { backgroundColor: theme.colors.primary },
                    headerTintColor: theme.colors.white,
                    headerTitleStyle: { fontWeight: "bold" }
                }}
            />
            <AudioguideScreen tourId={tourId} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.colors.grayLight },
});
