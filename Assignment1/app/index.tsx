import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AccountsOverview from "../../components/AccountsOverview";
import QuickActionCards from "../../components/QuickActionCards";
import RbcBottomNav from "../../components/RbcBottomNav";
import RbcHeader from "../../components/RbcHeader";

export default function RbcClonedApp() {
  // Assignment Requirement: Trigger an alert pop-up when clicked
  const handleAlertPress = () => {
    Alert.alert("Alert Button pressed"); // Required exact alert text matching [cite: 25]
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0051a2" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* RBC Header Component */}
        <RbcHeader />

        {/* Action Boxes Row */}
        <QuickActionCards />

        {/* Accounts Overview Component */}
        <AccountsOverview />

        {/* Needs Attention Warning Section */}
        <Text style={styles.blockHeader}>Needs Attention</Text>
        <View style={styles.attentionCard}>
          <View style={styles.attentionRow}>
            <View style={styles.scamTitleContainer}>
              <Text style={styles.scamLabel}>NOTICE:</Text>
              <Text style={styles.scamTitle}>
                Don't fall for a bank impersonation scam
              </Text>
            </View>
            <Text style={styles.dropdownArrow}>v</Text>
          </View>
          <Text style={styles.scamBody}>
            RBC will NEVER ask you to send money or give y...
          </Text>
        </View>

        {/* What's New Section */}
        <View style={styles.whatsNewContainer}>
          <Text style={styles.whatsNewText}>What's new in RBC Mobile</Text>
          <View style={styles.blueInfoCircle}>
            <Text style={styles.blueInfoText}>?</Text>
          </View>
        </View>
      </ScrollView>

      {/* Render the modular Bottom Navigation Bar Component */}
      <RbcBottomNav onAlertPress={handleAlertPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7F9",
  },
  scrollContent: {
    paddingBottom: 120,
  },
  blockHeader: {
    fontSize: 16,
    color: "#555555",
    paddingHorizontal: 16,
    marginBottom: 8,
    marginTop: 14,
  },
  attentionCard: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#EBEBEB",
  },
  attentionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  scamTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  scamLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#A32A2A",
    marginRight: 6,
  },
  scamTitle: {
    color: "#A32A2A",
    fontWeight: "500",
    fontSize: 14,
  },
  dropdownArrow: {
    color: "#999999",
    fontSize: 12,
  },
  scamBody: {
    color: "#666666",
    fontSize: 13,
    paddingLeft: 54,
  },
  whatsNewContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginTop: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#EBEBEB",
  },
  whatsNewText: {
    fontSize: 16,
    color: "#555555",
    marginRight: 6,
  },
  blueInfoCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#0051a2",
    justifyContent: "center",
    alignItems: "center",
  },
  blueInfoText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "bold",
  },
});
