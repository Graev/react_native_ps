import { useCallback, useEffect, useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet, useWindowDimensions } from 'react-native';
import { useAtomValue, useSetAtom } from 'jotai';
import { Stack } from 'expo-router';
import { CoffeeTypeEnum, CoffeeTypeToLabel, ProductCard } from '@entities/product';
import { Button } from '@shared/Button/Button';
import { Colors, Fonts } from '@shared/tokens';
import { Input } from '@shared/Input/Input';
import { StatusBar } from 'expo-status-bar';
import { catalogAtom, filterCatalogAtom, CoffeeTypeFilterAdditionEnum } from '@entities/catalog';

const GAP_SIZE = 16;
const HORISONTAL_PADDING = 30;

export default function Catalog() {
	const { filter, products } = useAtomValue(catalogAtom);
	const setFilter = useSetAtom(filterCatalogAtom);
	const dimensions = useWindowDimensions();

	useEffect(() => {
		setFilter(filter).catch(console.error);
	}, []);

	const coffeeTypeVariants = useMemo(() => {
		return [CoffeeTypeFilterAdditionEnum.All, ...Object.values(CoffeeTypeEnum)].map((type) => {
			const isActive =
				type === filter.type || (!filter.type && type === CoffeeTypeFilterAdditionEnum.All);

			const colorVariant = isActive ? undefined : 'white';

			return (
				<Button
					variant="small"
					key={type}
					title={CoffeeTypeToLabel[type]}
					colorVariant={colorVariant}
					style={{ marginRight: 8 }}
					onPress={() => {
						if (isActive) return;
						const newType = type === CoffeeTypeFilterAdditionEnum.All ? undefined : type;
						setFilter({ type: newType }).catch(console.error);
					}}
				/>
			);
		});
	}, [filter.type]);

	const productWidth = useMemo(
		() => (dimensions.width - GAP_SIZE - HORISONTAL_PADDING * 2) / 2,
		[dimensions.width],
	);

	const updateTextFilter = useCallback(
		(text: string) => {
			setFilter({ text: text.toLowerCase() }).catch(console.error);
		},
		[setFilter],
	);

	return (
		<View style={styles.constainer}>
			<Stack.Screen options={{ headerShown: false }} />
			<StatusBar style="light" />
			<View style={styles.topBar}>
				<Text style={styles.addressLabel}>Адрес</Text>
				<Text style={styles.addressValue}>Москва, Новослободская 23</Text>
				<Input
					icon={'search'}
					placeholder={'Поиск'}
					style={styles.search}
					placeholderTextColor="#989898"
					color={Colors.white}
					onChangeText={updateTextFilter}
				/>
			</View>
			<View style={styles.productsContainer}>
				<ScrollView style={styles.coffeeTypeButtons} horizontal>
					{coffeeTypeVariants}
				</ScrollView>
				<View style={styles.productList}>
					{products?.map((product) => {
						return (
							<ProductCard key={product.id} product={product} style={{ width: productWidth }} />
						);
					})}
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	constainer: {
		flex: 1,
	},
	topBar: {
		paddingHorizontal: HORISONTAL_PADDING,
		paddingTop: 15,
		paddingBottom: 35,
		backgroundColor: Colors.black,
	},
	addressLabel: {
		color: '#B7B7B7',
		fontSize: Fonts.f12,
		marginBottom: 4,
	},
	addressValue: {
		color: Colors.whiteGray,
		fontSize: Fonts.f16,
		fontWeight: 600,
		marginBottom: 28,
	},
	search: {
		backgroundColor: '#313131',
	},

	productsContainer: {
		paddingHorizontal: 30,
		paddingTop: 30,
		backgroundColor: Colors.background,
	},
	coffeeTypeButtons: {
		marginBottom: 24,
	},
	productList: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: GAP_SIZE,
	},
});
