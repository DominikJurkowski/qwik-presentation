import { component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./photos.css?inline";
type PhotProps = {
  state: any;
};

export const Photo = component$(({ state }: PhotProps) => {
  console.log("render <Photo>");
  useStylesScoped$(styles);
  return (
    <img
      class="photo"
      src={state.photos[state.currentPhoto].src}
      alt={state.photos[state.currentPhoto].alt}
    />
  );
});

export default component$(() => {
  console.log("render <Photos>");

  const photoState = useStore({
    currentPhoto: 0,
    photos: [
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
        alt: "A meme 1",
      },
      {
        src: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "A meme 2",
      },
      {
        src: "https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "A meme 3",
      },
    ],
  });
  return (
    <div>
      <h1>Photos</h1>
      <ul>
        {photoState.photos.map((_photo, index) => (
          <li>
            <a
              href={`#${index}`}
              onClick$={() => {
                photoState.currentPhoto = index;
                console.log(photoState.currentPhoto);
              }}
            >
              {" "}
              {index}
            </a>
          </li>
        ))}
      </ul>

      <Photo state={photoState} />
    </div>
  );
});
