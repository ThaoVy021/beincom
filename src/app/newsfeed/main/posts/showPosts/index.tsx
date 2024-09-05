"use client";

import ContentPosts from "@/components/posts/content";
import HeaderPosts from "@/components/posts/header";
import React from "react";
import { useSelector } from "react-redux";

import HeaderPostsSkeleton from "@/components/posts/skeleton";
import PostWrapper from "@/components/posts/wrapper";
import Highlighted from "@/components/highlightText";

const defaultPostContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maiores culpa expedita aliquid laudantium iste totam porro, beatae, voluptatum rerum perferendis accusamus? Doloremque ut animi voluptas. Ad quis natus repellat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint minima sapiente labore ipsum distinctio totam atque tenetur asperiores sunt maiores, provident recusandae vitae aspernatur. Minus rerum suscipit fugiat distinctio ipsam.";

export default function ShowPosts() {
  const posts = useSelector((state: any) => state.posts);

  const { isLoading, data } = posts;

  return (
    <div className="w-full block">
      {/* Default post */}
      {/* <PostWrapper>
        <HeaderPosts
          user={{
            avatar: "/community-bic.webp",
            fullName: "Beincom Official",
            username: "Beincom",
          }}
          isVerified={true}
          isEarlyAdopter={true}
          isStar={true}
          postedDate={new Date()}
        />
        <ContentPosts
          content={() =>
            Highlighted({
              text: defaultPostContent,
              highlight: posts.search,
            })
          }
          images={["/postsAd.webp"]}
        />
      </PostWrapper> */}
      {data
        ?.filter((post: any) => {
          if (posts.search !== "") {
            return post.body.toLowerCase().includes(posts.search.toLowerCase());
          }
          return true;
        })
        .map((post: any) => {
          const { id, userId, body, user } = post;

          return (
            <PostWrapper key={`post-${id}`}>
              <HeaderPosts
                user={{
                  avatar: `https://picsum.photos/id/${
                    (userId * 30) % 400 // Get random image
                  }/200/200`,
                  fullName: user?.name,
                  username: user?.username,
                }}
                isVerified={userId % 2 === 0}
                isStar={userId === 2}
                postedDate={new Date()}
              />
              <ContentPosts
                content={() =>
                  Highlighted({
                    text: body,
                    highlight: posts.search,
                  })
                }
                images={[
                  `https://picsum.photos/id/${(id * userId) % 400}/1024/800`,
                ]}
              />
            </PostWrapper>
          );
        })}
      {isLoading && (
        <PostWrapper>
          <HeaderPostsSkeleton />
        </PostWrapper>
      )}
    </div>
  );
}
