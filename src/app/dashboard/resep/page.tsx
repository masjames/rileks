import { AppShell, RecipeCard } from '@/components/rileks/components';import { recipes } from '@/lib/mock/rileks-data';
export default function Page(){return <AppShell><h1>Resep</h1><p className="lead">SOP produk agar rasa dan proses lebih konsisten.</p><div className="grid cards">{recipes.map(r=><RecipeCard key={r.id} recipe={r}/>)}</div></AppShell>}
