import { Linking, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderScreen from "../../components/HeaderScreen/HeaderScreen";
import ScreenWrapper from "../wrappers/ScreenWrapper/ScreenWrapper";
import { useData } from "./useData";
import SvgButtonAccept from "../../core/SvgButtonAccept/SvgButtonAccept";
import { selectIsOnBoarding } from "../../store/features/setting";
import { useAppSelector } from "../../store/hooks";

const PrivacyScreen = () => {
  const { visiblePrivacy, setVisiblePrivacy } = useData();
  const isOnBoarding = useAppSelector(selectIsOnBoarding);
  return (
    <ScreenWrapper>
      <HeaderScreen title="privacy" />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.privacyText}>Privacy Policy</Text>
        <View style={{ rowGap: "40%", alignItems: "center" }}>
          {!visiblePrivacy ? (
            <>
              <Text numberOfLines={2} style={styles.text}>
                you can read our{"\n"}
                privacy policy
              </Text>

              <Text
                style={[
                  styles.text,
                  {
                    fontFamily: "Montserrat-Regular",
                    fontSize: 18,
                  },
                ]}
                onPress={() => {
                  Linking.openURL("https://google.com");
                }}
              >
                Read privacy
              </Text>
            </>
          ) : (
            <View style={{ paddingTop: 20, height: 320 }}>
              <ScrollView
                indicatorStyle={"white"}
                style={{ flexGrow: 1, flex: 1 }}
                contentContainerStyle={styles.scroll}
              >
                <Text style={styles.scrollText}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recenPageMaker including versions of Lorem
                  Ipsum. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recenPageMaker including versions of Lorem
                  Ipsum. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recenPageMaker including versions of Lorem
                  Ipsum. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recenPageMaker including versions of Lorem
                  Ipsum. remaining essentially unchanged. It was popularised in
                  the 1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recenPageMaker including versions of
                  Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recenPageMaker including versions of Lorem
                  Ipsum. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recenPageMaker including versions of Lorem
                  Ipsum.
                </Text>
              </ScrollView>
            </View>
          )}
        </View>
      </View>
      {!isOnBoarding && <SvgButtonAccept />}
    </ScreenWrapper>
  );
};

export default PrivacyScreen;

const styles = StyleSheet.create({
  privacyText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 26,
    fontWeight: "400",
    fontFamily: "Angkor-Regular",
  },
  text: {
    color: "#fffff07f",
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
  },
  scroll: {
    alignSelf: "center",
    width: "90%",
    overflow: "scroll",
  },
  scrollText: {
    fontFamily: "Montserrat-Regular",
    color: "#fffff09f",
    fontSize: 15,
    textAlign: "left",
    lineHeight: 20,
  },
});
