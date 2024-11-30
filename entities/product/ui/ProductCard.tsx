import { ImageBackground, Pressable, Text, View } from 'react-native';
import { StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { ProductModel } from '@entities/product';
import { Colors, Fonts, Radius } from '@shared/tokens';
import StarIcon from '@assets/icons/star.svg';
import PlusIcon from '@assets/icons/plus.svg';

type ProductCardProps = {
	product: ProductModel;
	style?: StyleProp<ViewStyle>;
};

export const ProductCard = ({ product, style }: ProductCardProps) => {
	return (
		<View style={[styles.product, style]}>
			<ImageBackground
				source={{ uri: product.image }}
				style={styles.imageContainer}
				imageStyle={styles.image}
			>
				<View style={styles.rating}>
					<StarIcon style={styles.ratingIcon} />
					<Text style={styles.ratingText}>{product.rating} </Text>
				</View>
			</ImageBackground>
			<View style={styles.bottomContainer}>
				<Text style={styles.name}>{product.name}</Text>
				<Text style={styles.subTitle}>{product.subTitle}</Text>
				<View style={styles.priceContainer}>
					<Text style={styles.price}>{product.price} ₽</Text>
					<Pressable style={styles.addButton}>
						<PlusIcon style={styles.plusIcon} />
					</Pressable>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	product: {
		backgroundColor: Colors.white,
		borderRadius: Radius.r16,
		padding: 4,
	},
	imageContainer: {
		height: 132,
		marginBottom: 12,
	},
	image: {
		resizeMode: 'cover',
		borderRadius: Radius.r16,
	},
	rating: {
		flexDirection: 'row',
		alignSelf: 'flex-start',
		justifyContent: 'center',
		paddingHorizontal: 14,
		paddingVertical: 6,
		backgroundColor: 'rgba(0, 0, 0, 0.16)',
		borderBottomRightRadius: Radius.r16,
		borderTopLeftRadius: Radius.r16,
	},
	ratingIcon: {
		width: 10,
		height: 10,
		marginRight: 2,
	},
	ratingText: {
		color: Colors.white,
		fontFamily: Fonts.semiBold,
		fontSize: Fonts.f10,
	},
	bottomContainer: {
		padding: 8,
	},
	name: {
		fontSize: Fonts.f16,
		fontFamily: Fonts.semiBold,
		marginBottom: 4,
	},
	subTitle: {
		fontSize: Fonts.f12,
		color: Colors.gray9B,
		marginBottom: 8,
	},
	priceContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	price: {
		fontSize: Fonts.f18,
		fontFamily: Fonts.semiBold,
		color: '#2F4B4E',
	},
	addButton: {
		backgroundColor: Colors.primary,
		borderRadius: 10,
		padding: 8,
		// width: 32,
		// height: 32,
	},
	plusIcon: {
		width: 16,
		height: 16,
	},
});
