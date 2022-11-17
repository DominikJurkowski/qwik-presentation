import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import Simple from "./simple";
import Photos from "./photos";
import Star from "./star";

export default component$(() => {
  // type LinkType = {
  //   name: string;
  //   href: string;
  // };

  // const links: LinkType[] = [
  //   {
  //     name: "Blow my mind 🤯",
  //     href: "/flower",
  //   },
  //   {
  //     name: "Easy example",
  //     href: "/simple",
  //   },
  //   {
  //     name: "Photos",
  //     href: "/photos",
  //   },
  //   {
  //     name: "Star",
  //     href: "/star",
  //   },
  // ];
  return (
    <div>
      {/* <h2>My examples</h2>
      <table class="commands">
        {links.map((link) => (
          <tr>
            <td>
              <Link class="mindblow" href={link.href}>
                {link.name}
              </Link>
            </td>
          </tr>
        ))}
      </table> */}

      {/* Simple */}
      {/* <Simple /> */}

      {/* Photos */}
      {/* <Photos /> */}

      {/* Star */}
      <Star />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
