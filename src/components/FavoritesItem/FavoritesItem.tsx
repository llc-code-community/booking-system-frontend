import { ImageFavorite, PriceFavorite, NightFavorite, LocationFavorite, RoomsFavorites, RatingFavorite, ReviewsFavorite } from "./FavoritesItem.styled"

export const FavoritesItem = () => {
    return <li>
        <ImageFavorite src="https://vforvanessahome.files.wordpress.com/2020/12/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg?w=1024" alt="room" />
        <PriceFavorite>$271
            <NightFavorite>night</NightFavorite>
        </PriceFavorite>
        <LocationFavorite>Entire condo in Dubai, United ArabEmirates</LocationFavorite>
        <RoomsFavorites>3 guests, 1 bedroom, 2 beds, 1 bath</RoomsFavorites>
        <div>
            <RatingFavorite>5.0</RatingFavorite>
            <ReviewsFavorite>(56 reviews)</ReviewsFavorite>
        </div>
    </li>
}