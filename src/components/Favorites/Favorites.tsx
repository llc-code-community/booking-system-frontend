import { FavoritesItem } from "../FavoritesItem/FavoritesItem"
import { TitleFavorite, QuantityFavorite, SortFavorite } from "./Favorites.styled"

export const Favorites = () => {
    return <>
        <TitleFavorite>Favorites <QuantityFavorite>(3)</QuantityFavorite> </TitleFavorite>
        <SortFavorite type="button">Sort by</SortFavorite>
        <ul>
            <FavoritesItem/>
            <FavoritesItem/>
            <FavoritesItem/>
        </ul>
    </>
}