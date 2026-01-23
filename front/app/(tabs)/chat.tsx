import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // Fix warning
import { theme } from "../../src/theme/theme";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../../src/context/AuthContext";
import { API_BASE_URL } from "../../src/config/env";

type Message = {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
    avatar?: string; // Optional avatar for messages
};

const avatarUrl = (avatarName?: string) => {
    if (!avatarName) return "https://ui-avatars.com/api/?name=User&background=random";
    // Si viene con http es url completa, si no es nombre de archivo local
    if (avatarName.startsWith("http")) return avatarName;
    return `${API_BASE_URL}/uploads/images/avatars/${avatarName}.jpg`;
};

export default function ChatScreen() {
    const { user } = useAuth();

    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "¡Hola! Bienvenido al chat de la comunidad.",
            isUser: false,
            timestamp: new Date(),
        },
    ]);
    const [inputText, setInputText] = useState("");

    const sendMessage = () => {
        if (inputText.trim().length === 0) return;

        const newMessage: Message = {
            id: Date.now().toString(),
            text: inputText,
            isUser: true,
            timestamp: new Date(),
            avatar: user?.avatar,
        };

        setMessages((prev) => [...prev, newMessage]);
        setInputText("");
    };

    // Mock connected users
    const connectedUsers = [
        { id: "u1", name: "Juan", avatar: "avatar_2" },
        { id: "u2", name: "Maria", avatar: "avatar_3" },
        { id: "u3", name: "Carlos", avatar: "avatar_4" },
        { id: "u4", name: "Ana", avatar: "avatar_5" },
        { id: "u5", name: "Luisa", avatar: "avatar_6" },
    ];

    const renderConnectedUser = ({ item }: { item: { id: string; name: string; avatar: string } }) => (
        <View style={styles.connectedUserItem}>
            <View style={styles.connectedAvatarWrap}>
                <Image source={{ uri: avatarUrl(item.avatar) }} style={styles.connectedAvatar} />
                {/* Green dot for online status */}
                <View style={styles.onlineIndicator} />
            </View>
            <Text style={styles.connectedUserName} numberOfLines={1}>
                {item.name}
            </Text>
        </View>
    );

    const renderItem = ({ item }: { item: Message }) => {
        return (
            <View
                style={[
                    styles.messageRow,
                    item.isUser ? styles.rowUser : styles.rowOther,
                ]}
            >
                {/* Avatar izquierda: solo si NO es usuario actual Y tiene avatar definido */}
                {!item.isUser && (
                    item.avatar ? (
                        <Image
                            source={{ uri: avatarUrl(item.avatar) }}
                            style={styles.msgAvatar}
                        />
                    ) : (
                        // Espacio vacío para mantener alineación si se desea, o nada.
                        // El usuario pidió "no se muestre", así que nada.
                        <View style={{ width: 30, marginRight: 8 }} />
                    )
                )}

                <View
                    style={[
                        styles.messageBubble,
                        item.isUser ? styles.userBubble : styles.otherBubble,
                        !item.isUser && !item.avatar && { marginLeft: 0 } // Ajuste opcional
                    ]}
                >
                    <Text
                        style={[
                            styles.messageText,
                            item.isUser ? styles.userText : styles.otherText,
                        ]}
                    >
                        {item.text}
                    </Text>
                </View>

                {/* Avatar derecha: solo si ES usuario actual */}
                {item.isUser && (
                    <Image
                        source={{ uri: avatarUrl(user?.avatar ?? "avatar_1") }}
                        style={styles.msgAvatar}
                    />
                )}
            </View>
        );
    };

    return (
        // Solución al espacio blanco: Eliminamos top edge del SafeAreaView
        <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
            <View style={styles.container}>
                <View style={styles.header}>

                    {/* Título "Chat Community" (Movido debajo o mantenido según diseño, 
              pero usuario pidió "entre nav y texto", asi que ponemos la lista ARRIBA del texto) 
              Estrategia: 
              1. Nav Bar (Status bar area / Top Header) 
              2. Connected Users 
              3. "Chat Community" Text 
          */}

                    {/* User requested: "between navigation bar and the div where the text 'Chat community' is found" 
              Technically 'diferenciando' top bar. Let's put the list first, then the title div.
          */}

                    <View style={styles.connectedUsersContainer}>
                        <Text style={styles.connectedLabel}>Online</Text>
                        <FlatList
                            data={connectedUsers}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={renderConnectedUser}
                            keyExtractor={(item) => item.id}
                            contentContainerStyle={styles.connectedListContent}
                        />
                    </View>

                    <View style={styles.headerContent}>
                        {/* Este es el div del texto 'Chat community' */}
                        {user?.avatar && (
                            <Image
                                source={{ uri: avatarUrl(user.avatar) }}
                                style={styles.headerAvatar}
                            />
                        )}
                        <Text style={styles.headerTitle}>Chat Community</Text>
                    </View>
                </View>

                <FlatList
                    data={messages}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                    style={styles.list}
                />

                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
                    style={styles.inputContainer}
                >
                    <TextInput
                        style={styles.input}
                        value={inputText}
                        onChangeText={setInputText}
                        placeholder="Escribe un mensaje..."
                        placeholderTextColor="#999"
                    />
                    <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                        <Ionicons name="send" size={24} color="white" />
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: theme.colors.white, // Cambiado a white para evitar línea azul abajo
    },
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    header: {
        backgroundColor: theme.colors.primary,
        paddingBottom: 10,
        paddingTop: 0, // Quitamos padding superior para pegar más los avatars
        paddingHorizontal: 16,
        ...theme.shadow.soft,
    },

    // Section for connected users
    connectedUsersContainer: {
        marginBottom: 10, // Margin between list and title
    },
    connectedLabel: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    connectedListContent: {
        gap: 15,
        paddingRight: 10,
    },
    connectedUserItem: {
        alignItems: 'center',
        width: 50,
    },
    connectedAvatarWrap: {
        position: 'relative',
        marginBottom: 4,
    },
    connectedAvatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        borderWidth: 2,
        borderColor: '#fff',
    },
    onlineIndicator: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: theme.colors.successLight, // Green
        borderWidth: 2,
        borderColor: theme.colors.primary,
    },
    connectedUserName: {
        color: '#fff',
        fontSize: 10,
        textAlign: 'center',
    },

    // Main Header Title Area
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        paddingTop: 5,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.1)', // Subtle separator
    },
    headerAvatar: {
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: '#fff',
    },
    headerTitle: {
        fontSize: theme.typography.fontSize.h2,
        fontWeight: "bold",
        color: theme.colors.white,
    },
    list: {
        flex: 1,
    },
    listContent: {
        padding: 16,
        paddingBottom: 20,
    },
    messageRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 10,
        gap: 8,
    },
    rowUser: {
        justifyContent: 'flex-end',
    },
    rowOther: {
        justifyContent: 'flex-start',
    },
    msgAvatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#ccc',
    },
    messageBubble: {
        maxWidth: "75%",
        padding: 12,
        borderRadius: 20,
        ...theme.shadow.soft,
    },
    userBubble: {
        backgroundColor: theme.colors.primary,
        borderBottomRightRadius: 4,
    },
    otherBubble: {
        backgroundColor: theme.colors.white,
        borderBottomLeftRadius: 4,
    },
    messageText: {
        fontSize: theme.typography.fontSize.main,
    },
    userText: {
        color: theme.colors.white,
    },
    otherText: {
        color: theme.colors.text,
    },
    inputContainer: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: theme.colors.white,
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#eee",
    },
    input: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginRight: 10,
        fontSize: 16,
        color: "#000",
    },
    sendButton: {
        backgroundColor: theme.colors.primary,
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center",
    },
});
