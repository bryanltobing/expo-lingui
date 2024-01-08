import "intl-pluralrules";

import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

import { i18n } from "@lingui/core";
import { Trans, Plural, Select, SelectOrdinal } from "@lingui/macro";
import { I18nProvider, useLingui } from "@lingui/react";

import { messages as enMessages } from "./locales/en/messages";
import { messages as idMessages } from "./locales/id/messages";
import { useState } from "react";

i18n.load({
  en: enMessages,
  id: idMessages,
});
i18n.activate("id");

const genders = ["female", "male", "non-binary"];

const Initial = () => {
  const name = "Bryan";

  const [count, setCount] = useState(1);

  const [gender, setGender] = useState(genders[0]);

  const { i18n } = useLingui();

  return (
    <View style={styles.container}>
      <Button
        title={`Toggle Language, current: ${i18n.locale}`}
        onPress={() =>
          i18n.locale === "en" ? i18n.activate("id") : i18n.activate("en")
        }
      />
      <Button
        title="Toggle Singular Plural"
        onPress={() => setCount((prevCount) => (prevCount > 1 ? 1 : 2))}
      />
      <Button
        title="Toggle Gender"
        onPress={() =>
          setGender(genders[Math.floor(Math.random() * genders.length)])
        }
      />
      <Text style={{ fontWeight: "bold" }}>Simple text:</Text>
      <Text>
        <Trans>Open up App.tsx to start working on your app!</Trans>
      </Text>
      <Text style={{ fontWeight: "bold" }}>Variables:</Text>
      <Text>
        <Trans>Hello {name}</Trans>
      </Text>
      <Text style={{ fontWeight: "bold" }}>Pluralization:</Text>
      <Text>
        <Plural
          _0="There are no invite codes"
          value={count}
          _1="# invite code available"
          other="# invite codes available"
        />
      </Text>
      <Text style={{ fontWeight: "bold" }}>Select:</Text>
      <Text>
        <Select
          value={gender}
          _male="His book"
          _female="Her book"
          other="Their book"
        />
      </Text>
      <StatusBar style="auto" />

      <Text style={{ fontWeight: "bold" }}>Select Ordinal:</Text>
      <Text>
        <SelectOrdinal value={count} _1="#st" _2="#nd" _3="#rd" other="#th" />
      </Text>

      <Text style={{ fontWeight: "bold" }}>Rich Text:</Text>

      <Trans>
        <Text>
          <Text>We are sending OTP to</Text>
          <Text style={{ color: "blue" }}> 082192840486</Text>
          <Text style={{ fontWeight: "bold" }}> tonight!</Text>
        </Text>
      </Trans>
    </View>
  );
};

export default function App() {
  return (
    <I18nProvider i18n={i18n}>
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
