import { Header } from "./components/Header"
import { Post } from "./Post"
import './styles.css'

export function App() {

  return (
    <div>

      <Header />

      <Post 
        author="Post Malone"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem itaque totam odit officiis voluptatum natus animi, repudiandae, rerum officia quidem quia minus dolorem quam sequi nobis? Laboriosam expedita aspernatur temporibus!"
      />
      <Post 
        author="Gabriel o Pensador"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem itaque totam odit officiis voluptatum natus animi, repudiandae, rerum officia quidem quia minus dolorem quam sequi nobis? Laboriosam expedita aspernatur temporibus!"
      />
    </div>
    
  )
}


