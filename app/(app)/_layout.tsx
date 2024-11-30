import { Tabs } from 'expo-router';
import { TabBar } from '@entities/layout';

export default function TabsLayout() {
	return (
		<Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <TabBar {...props} />}></Tabs>
	);
}
