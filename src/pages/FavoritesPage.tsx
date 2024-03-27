import { Favorites } from '../components/Favorites/Favorites';

export interface FavoritesPageProps {}

export default function FavoritesPage({}: FavoritesPageProps) {
  return (
    <main>
      <h1>Favorites page</h1>
      <Favorites/>
    </main>
  );
}
