// src/screens/RegisterScreen.tsx
import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
    ScrollView,
    Image,
    Alert,
    Modal,
    FlatList,
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { router } from "expo-router";
import CountryPicker, { type Country } from 'react-native-country-picker-modal';

import { theme } from "../theme/theme";
import i18n from "../i18n";
import { useLanguage } from "../context/LanguageContext";
import { registerApi, type RegisterPayload } from "../api/auth";
import { API_BASE_URL } from "../config/env";

const AVAILABLE_AVATARS = Array.from({ length: 24 }, (_, i) => `avatar_${i + 1}`);

export default function RegisterScreen() {
    const { locale } = useLanguage();

    const [formData, setFormData] = useState({
        nombre: "",
        apellidos: "",
        email: "",
        telefono: "",
        pais: "",
        fechaNacimiento: "",
        password: "",
        confirmPassword: "",
        avatar: "avatar_1",
    });

    const [loading, setLoading] = useState(false);
    const [modalAvatarVisible, setModalAvatarVisible] = useState(false);
    const [countryPickerVisible, setCountryPickerVisible] = useState(false);

    // States for phone prefix (Calling Code)
    const [phoneCallingCode, setPhoneCallingCode] = useState("34");
    const [phoneCountryCode, setPhoneCountryCode] = useState<any>("ES");
    const [phonePickerVisible, setPhonePickerVisible] = useState(false);

    const [agreeTerms, setAgreeTerms] = useState(false);

    const selectedAvatarUri = `${API_BASE_URL}/uploads/images/avatars/${formData.avatar}.jpg`;

    const handleRegister = async () => {
        // Validaciones
        if (
            !formData.nombre ||
            !formData.apellidos ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword ||
            !formData.telefono ||
            !formData.pais ||
            !formData.fechaNacimiento
        ) {
            Alert.alert(i18n.t("error"), i18n.t("fill_required"));
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            Alert.alert(i18n.t("error"), i18n.t("passwords_mismatch"));
            return;
        }

        if (!agreeTerms) {
            Alert.alert(i18n.t("error"), "You must agree to the terms.");
            return;
        }

        // RegEx fecha simple YYYY-MM-DD
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(formData.fechaNacimiento)) {
            Alert.alert(i18n.t("error"), "Date format must be YYYY-MM-DD");
            return;
        }

        setLoading(true);

        const payload: RegisterPayload = {
            email: formData.email,
            password: formData.password,
            nombre: formData.nombre,
            apellidos: formData.apellidos,
            telefono: `+${phoneCallingCode} ${formData.telefono}`,
            pais: formData.pais,
            avatar: formData.avatar,
            fechaNacimiento: formData.fechaNacimiento
        };

        const res = await registerApi(payload);
        setLoading(false);

        if (res.success) {
            Alert.alert(
                i18n.t("success"),
                i18n.t("success_register"),
                [{ text: "OK", onPress: () => router.replace("/login") }]
            );
        } else {
            Alert.alert(i18n.t("error"), res.error || i18n.t("error_register"));
        }
    };

    const onSelectCountry = (country: Country) => {
        setFormData(p => ({ ...p, pais: country.name as string }));
        setCountryPickerVisible(false);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>{i18n.t("register").toUpperCase()}</Text>

                {/* Avatar Selector */}
                <View style={styles.avatarSection}>
                    <Pressable onPress={() => setModalAvatarVisible(true)} style={{ alignItems: 'center' }}>
                        <Image source={{ uri: selectedAvatarUri }} style={styles.avatarImg} />
                        <Text style={styles.changeAvatarText}>{i18n.t("choose_avatar")}</Text>
                    </Pressable>
                </View>

                {/* Form Fields */}
                <View style={styles.form}>
                    <Text style={styles.label}>{i18n.t("name")}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="John"
                        value={formData.nombre}
                        onChangeText={(t) => setFormData(p => ({ ...p, nombre: t }))}
                    />

                    <Text style={styles.label}>{i18n.t("surname")}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Doe"
                        value={formData.apellidos}
                        onChangeText={(t) => setFormData(p => ({ ...p, apellidos: t }))}
                    />

                    <Text style={styles.label}>{i18n.t("email")}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="john@example.com"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={formData.email}
                        onChangeText={(t) => setFormData(p => ({ ...p, email: t }))}
                    />

                    <Text style={styles.label}>{i18n.t("phone")}</Text>
                    <View style={styles.phoneRow}>
                        {/* Prefix Picker */}
                        <Pressable style={styles.prefixButton} onPress={() => setPhonePickerVisible(true)}>
                            <CountryPicker
                                theme={{
                                    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
                                    fontSize: 16,
                                }}
                                visible={phonePickerVisible}
                                onSelect={(country) => {
                                    setPhoneCountryCode(country.cca2);
                                    setPhoneCallingCode(country.callingCode[0]);
                                    setPhonePickerVisible(false);
                                }}
                                onClose={() => setPhonePickerVisible(false)}
                                countryCode={phoneCountryCode}
                                withFilter
                                withFlag
                                withCallingCode
                                withCallingCodeButton
                                translation={(locale === 'es' ? 'spa' : locale === 'fr' ? 'fra' : 'common') as 'spa' | 'fra' | 'common'}
                                containerButtonStyle={{ alignItems: 'center', justifyContent: 'center' }}
                            />
                            <Text style={styles.arrowDown}>▼</Text>
                        </Pressable>

                        {/* Phone Number Input */}
                        <TextInput
                            style={styles.phoneInput}
                            placeholder="600 12 34 56"
                            keyboardType="phone-pad"
                            value={formData.telefono}
                            onChangeText={(t) => setFormData(p => ({ ...p, telefono: t }))}
                        />
                    </View>

                    <Text style={styles.label}>{i18n.t("country")}</Text>
                    <Pressable
                        style={[styles.input, { justifyContent: "center" }]}
                        onPress={() => setCountryPickerVisible(true)}
                    >
                        <Text style={{ color: formData.pais ? theme.colors.black : "#999" }}>
                            {formData.pais || i18n.t("select_country")}
                        </Text>
                    </Pressable>

                    <Text style={styles.label}>{i18n.t("date_of_birth")}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="YYYY-MM-DD"
                        value={formData.fechaNacimiento}
                        onChangeText={(t) => setFormData(p => ({ ...p, fechaNacimiento: t }))}
                    />

                    <Text style={styles.label}>{i18n.t("password")}</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        value={formData.password}
                        onChangeText={(t) => setFormData(p => ({ ...p, password: t }))}
                    />

                    <Text style={styles.label}>{i18n.t("password_confirm")}</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        value={formData.confirmPassword}
                        onChangeText={(t) => setFormData(p => ({ ...p, confirmPassword: t }))}
                    />

                    {/* Terms Checkbox simulation */}
                    <Pressable
                        style={styles.termsContainer}
                        onPress={() => setAgreeTerms(!agreeTerms)}
                    >
                        <View style={[styles.checkbox, agreeTerms && styles.checkboxChecked]}>
                            {agreeTerms && <Text style={styles.checkMark}>✓</Text>}
                        </View>
                        <Text style={styles.termsText}>{i18n.t("terms_agree")}</Text>
                    </Pressable>

                    <Pressable
                        style={styles.btnPrimary}
                        onPress={handleRegister}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator color="#FFF" />
                        ) : (
                            <Text style={styles.btnPrimaryText}>{i18n.t("create_account")}</Text>
                        )}
                    </Pressable>

                    <Pressable style={styles.linkContainer} onPress={() => router.replace("/login")}>
                        <Text style={styles.linkText}>{i18n.t("already_account")}</Text>
                    </Pressable>
                </View>

                {/* Modals */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalAvatarVisible}
                    onRequestClose={() => setModalAvatarVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>{i18n.t("select_avatar")}</Text>
                            <FlatList
                                data={AVAILABLE_AVATARS}
                                numColumns={3}
                                keyExtractor={(item) => item}
                                columnWrapperStyle={{ gap: 10 }}
                                contentContainerStyle={{ paddingBottom: 20 }}
                                renderItem={({ item }) => {
                                    const isSelected = formData.avatar === item;
                                    return (
                                        <Pressable
                                            style={[styles.avatarOption, isSelected && styles.avatarOptionSelected]}
                                            onPress={() => {
                                                setFormData(p => ({ ...p, avatar: item }));
                                                setModalAvatarVisible(false);
                                            }}
                                        >
                                            <Image
                                                source={{ uri: `${API_BASE_URL}/uploads/images/avatars/${item}.jpg` }}
                                                style={styles.avatarGridImg}
                                            />
                                        </Pressable>
                                    );
                                }}
                            />
                            <Pressable
                                style={styles.btnSecondary}
                                onPress={() => setModalAvatarVisible(false)}
                            >
                                <Text style={styles.btnText}>{i18n.t("cancel")}</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                {countryPickerVisible && (
                    <CountryPicker
                        visible={countryPickerVisible}
                        onClose={() => setCountryPickerVisible(false)}
                        onSelect={onSelectCountry}
                        countryCode="ES"
                        withFilter
                        withFlag
                        withCountryNameButton={false}
                        withAlphaFilter={false}
                        withCallingCode={false}
                        translation={(locale === 'es' ? 'spa' : locale === 'fr' ? 'fra' : 'common') as 'spa' | 'fra' | 'common'}
                        containerButtonStyle={{ display: 'none' }}
                    />
                )}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, paddingBottom: 50, backgroundColor: theme.colors.grayLight, flexGrow: 1 },
    title: {
        fontSize: 24, fontWeight: "900", color: theme.colors.primary,
        textAlign: "center", marginBottom: 20, marginTop: 10,
    },
    avatarSection: { alignItems: "center", marginBottom: 20 },
    avatarImg: { width: 100, height: 100, borderRadius: 50, marginBottom: 8 },
    changeAvatarText: { color: theme.colors.primary, fontWeight: "600" },

    form: { gap: 12 },
    label: { fontSize: 14, color: theme.colors.grayDarken, fontWeight: "600", marginBottom: 4 },
    input: {
        backgroundColor: "#FFF", borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10,
        fontSize: 16, borderWidth: 1, borderColor: "#DDD", color: theme.colors.black,
    },

    // Phone Input Styles
    phoneRow: { flexDirection: 'row', gap: 10 },
    prefixButton: {
        flexDirection: 'row', alignItems: 'center', backgroundColor: "#FFF",
        borderWidth: 1, borderColor: "#DDD", borderRadius: 8, paddingHorizontal: 8,
        minWidth: 90, justifyContent: 'space-between'
    },
    phoneInput: {
        flex: 1, backgroundColor: "#FFF", borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10,
        fontSize: 16, borderWidth: 1, borderColor: "#DDD", color: theme.colors.black,
    },
    arrowDown: { fontSize: 10, color: "#666", marginLeft: 4 },
    termsContainer: { flexDirection: "row", alignItems: "center", marginTop: 10, marginBottom: 10 },
    checkbox: {
        width: 24, height: 24, borderWidth: 2, borderColor: theme.colors.primary,
        borderRadius: 4, marginRight: 10, justifyContent: 'center', alignItems: 'center'
    },
    checkboxChecked: { backgroundColor: theme.colors.primary },
    checkMark: { color: "#FFF", fontWeight: "bold" },
    termsText: { fontSize: 14, color: theme.colors.grayDarken },

    btnPrimary: {
        backgroundColor: theme.colors.primary, paddingVertical: 14, borderRadius: 10,
        alignItems: 'center', marginTop: 10,
        shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 4, elevation: 3
    },
    btnPrimaryText: { color: "#FFF", fontWeight: "900", fontSize: 16 },

    linkContainer: { alignItems: 'center', marginTop: 20 },
    linkText: { color: theme.colors.primary, fontWeight: "600", fontSize: 15 },

    // Modal Common
    modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center", padding: 20 },
    modalContent: {
        width: "100%", maxHeight: "80%", backgroundColor: "white", borderRadius: 16, padding: 20,
        elevation: 5,
    },
    modalTitle: { fontSize: 20, fontWeight: "800", textAlign: "center", marginBottom: 20, color: theme.colors.primary },
    btnSecondary: { backgroundColor: theme.colors.grayDark, paddingVertical: 12, borderRadius: 10, alignItems: 'center', marginTop: 10 },
    btnText: { color: theme.colors.white, fontWeight: "700" },

    // Avatar Grid
    avatarOption: {
        flex: 1, aspectRatio: 1, margin: 4, borderRadius: 8, borderWidth: 2, borderColor: "transparent",
        overflow: "hidden", alignItems: 'center', justifyContent: 'center'
    },
    avatarOptionSelected: { borderColor: theme.colors.secondary },
    avatarGridImg: { width: "100%", height: "100%", resizeMode: "cover" },
});
