import {styled} from "styled-components";

export const ImageFavorite = styled.img`
    width: 282px;
    height: 291px;
    border-radius: 36px;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`

export const PriceFavorite = styled.p`
    font-size: 22px;
    font-weight: 500;
`

export const NightFavorite = styled.span`
    font-weight: 300;
`

export const LocationFavorite = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
`

export const RoomsFavorites = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    opacity: 0.5;
`

export const RatingFavorite = styled.p`
    font-size: 14px;
`

export const ReviewsFavorite = styled.p`
    font-size: 14px;
    opacity: 0.5;
`