import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import {Card} from '../components/Card';
import { useTitle } from '../hooks/useTitle';

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  // use title changes the title of the page accordingly using useTitle hook
  useTitle(`Search Result for ${queryTerm}`);
  
  return (
    <main>
      <section>
        <p className='text-3xl text-gray-700 dark:text-white'> {movies.length === 0 ? `No result found for ${queryTerm}` : `Result for ${queryTerm}` }</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          ))}
          
        </div>

      </section>
    </main>
  )
}
