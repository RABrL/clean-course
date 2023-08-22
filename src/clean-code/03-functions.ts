(() => {

  function getMovieById( id: string ) {
      console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCastById( movieId: string ) {
      console.log({ movieId });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBioById( id: string ) {
      console.log({ id });
  }
  
  // Crear una película

  interface createMovieProps {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }
  function createMovie({ title, description, rating, cast }:createMovieProps ) {
      console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActor( fullName: string, birthdate: Date ): boolean {
      
      // tarea asincrona para verificar nombre
      // ..
      // ..
      if ( fullName === 'fernando' ) return false;

      console.log('Crear actor');
      return true;        

  }

  //continuar

  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }):number => {
    if ( isDead ) return 1500
    if ( isSeparated ) return 2000
    if ( isRetired ) return 3000
    return 4000; 
  }

  
    
})();




 