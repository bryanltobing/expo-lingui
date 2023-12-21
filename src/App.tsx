import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

import { i18n } from "@lingui/core";
import { Trans } from "@lingui/macro";
import { I18nProvider } from "@lingui/react";

import { messages as enMessages } from "./locales/en/messages";
import { messages as idMessages } from "./locales/id/messages";

i18n.load({
  en: enMessages,
  id: idMessages,
});
i18n.activate("id");

const Initial = () => {
  return (
    <View style={styles.container}>
      <Trans>Open up App.tsx to start working on your app!</Trans>

      <StatusBar style="auto" />
    </View>
  );
};

export default function App() {
  return (
    <I18nProvider i18n={i18n} defaultComponent={Text}>
      <Initial />
    </I18nProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
