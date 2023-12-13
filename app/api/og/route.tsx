import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          fontSize: 32,
          fontWeight: 600,
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1320 184">
          <path d="M330 46.7c.1.5 1.4 2.4 3 4.3l3 3.4V135h17v-35h19V84h-19V62h30v19h16V66c0-14.7-.1-15.2-2.5-17.5l-2.4-2.5H362c-17.6 0-32 .3-32 .7zM406 46.6c0 .3 1.8 2.7 4 5.3l4 4.7v73.5l2.5 2.4c2.4 2.5 2.6 2.5 20.5 2.5s18.1 0 20.5-2.5c2.4-2.3 2.5-3 2.5-14V107h-16v12h-14V46h-12c-6.6 0-12 .3-12 .6zM467.6 48.2c1 1.3 2.9 3.4 4.1 4.8 2.2 2.5 2.2 2.8 2.5 40.4l.3 37.8 2.4 1.9c2.2 1.8 4.2 1.9 28.6 1.9 14.5 0 27.1-.3 28-.6 3.1-1.2 4.5-5.9 4.5-15.4v-9h-16v9h-32v-18h16V85h-16V62h32v13h16V63.9c0-11-.7-14.2-3.9-16.6-1.2-.9-10.3-1.2-35-1.3h-33.4l1.9 2.2zM548.3 50.6c.9 8.4 8.8 21.4 23.2 38.4 1.1 1.3 0 3.2-7.2 12-9.3 11.6-15.3 22.5-16 29.4l-.6 4.6h15.8l1.3-4.1c1.5-4.9 5.9-11.9 13.3-21.2l5.4-6.8 4.3 4.8c6.3 7.1 14 18.8 15.2 23.3l1.1 4h7.9c9.2 0 9.1.1 6.4-9.1-2-6.8-7-15.1-15.3-25.4-3.5-4.4-6.8-8.5-7.2-9.1-.6-.7 1.3-3.8 5.3-8.5 8.5-10.2 14.3-19.4 16.7-26.7 3.7-10.8 4.4-10.2-12.6-10.2h-14.6l1.9 2.2c1 1.3 3.1 3.7 4.8 5.5l2.9 3.2-4.5 6.3c-2.5 3.5-6.3 8.2-8.4 10.6l-3.9 4.3-5.4-6.8c-7.4-9.3-11.8-16.3-13.3-21.2l-1.3-4.1h-15.8l.6 4.6zM627 46.4c0 .3 1.8 2.6 4 5.1l4 4.6V135h16V46h-12c-6.6 0-12 .2-12 .4zM664.8 48.7c1.1 1.6 2.9 3.7 4.1 4.7 2.1 1.9 2.1 2.5 2.1 41.8V135h23.3c16.3-.1 23.8-.4 25.2-1.3 1.2-.7 5.1-4.4 8.8-8.4l6.7-7.2V93.9l-5.1-5.4-5.1-5.4 2.1-3c1.9-2.6 2.1-4.3 2.1-16 0-12.7-.1-13.3-2.5-15.6l-2.4-2.5h-61.2l1.9 2.7zm48.2 18c0 7.6-1.3 8.3-14.7 8.3H687V62h26v4.7zm1.2 29c4.6 4.5 4.8 5 4.8 10.2 0 5-.3 5.9-3.7 9.3l-3.7 3.8H687V91h22.4l4.8 4.7zM743 46.6c0 .3 1.8 2.8 4 5.4l4 4.8v74.1l2.6 2c2.5 1.9 4 2.1 19.6 2.1 17.6 0 21.8-.8 23.2-4.5.3-.9.6-6.6.6-12.6V107h-16v12h-14V46h-12c-6.6 0-12 .3-12 .6zM804.8 48.7c1.1 1.6 2.9 3.7 4.1 4.7 2.1 1.9 2.1 2.5 2.1 39.3v37.4l2.5 2.4 2.4 2.5h53.8l2.4-2.6c2.1-2.3 2.4-3.6 2.7-12.5l.4-9.9H858v9h-31v-18h15V85h-15V62h31v13h17.2l-.4-12.1c-.3-11.8-.4-12.1-3.1-14.5l-2.8-2.4h-66l1.9 2.7zM904.3 48c-1.7 1-3.7 2.8-4.2 3.9-.7 1.3-1.1 15.2-1.1 40.4 0 37.3.1 38.5 2.1 41 3.5 4.5 6.8 4.8 45.7 4.5l36.4-.3 3.4-3.7 3.4-3.8V92.4c0-33.6-.2-37.9-1.7-40.5-3.4-5.7-4.6-5.9-44.5-5.9-34.2 0-36.5.1-39.5 2zm78 2.2c4.6 2.4 4.6 2.3 4.7 41.6v37.4l-2.9 2.9-2.9 2.9h-36.1c-25.8 0-36.8-.3-38.6-1.2-5.3-2.4-5.5-3.7-5.5-41.8 0-37.1.3-39.3 4.7-41.9 2.6-1.5 73.8-1.5 76.6.1z" />
          <path d="M907 63c0 14.2 3.7 18.7 14.7 17.8 8.5-.7 13.3-7.3 11.7-15.9-1.5-8.2-6.1-10.9-18.4-10.9h-8v9zm18.4-1.7c.9.7 2 3.1 2.3 5.4.7 5.4-2 8.3-7.6 8.3s-7.1-1.9-7.1-9.1V60h5.3c2.9 0 6.1.6 7.1 1.3z" />
          <path d="M916.7 63.7c-1.3 1.3-.7 6.1.9 6.7 4.2 1.6 7.4-1.6 5.4-5.4-1-1.9-4.9-2.7-6.3-1.3zM961.3 56c-1.7 1-3.7 2.8-4.2 3.9-1.7 3.2-1.3 12.8.6 15.8 3.3 5 11.5 6.7 17.9 3.7 5.1-2.4 6.4-5.8 6.4-16.4v-9h-8.7c-6.9 0-9.5.4-12 2zm15.5 9.5c-.6 6.8-2.7 9.5-7.7 9.5-4.2 0-5.4-.7-7-3.9-1.6-2.9-.6-8.7 1.7-10 .9-.6 4.3-1.1 7.6-1.1h5.8l-.4 5.5z" />
          <path d="M966.7 63.7c-1.2 1.2-.7 5 .8 6.3 3.2 2.7 8.2-2.3 5.5-5.5-1.3-1.5-5.1-2-6.3-.8zM939.7 58.8c-2.3 2.6-2.4 16.4-.1 18.6.8.9 1.9 1.6 2.4 1.6s1.1-3.9 1.2-8.8c.2-6.9.6-8.7 1.8-8.7 1.2 0 1.6 1.8 1.8 8.9.3 9.3 1.1 11.6 4.3 11.6 1.7 0 1.9-.9 1.9-10.5 0-9.2-.3-10.8-2-12.5-2.6-2.6-9-2.7-11.3-.2zM917.2 85.2c-2.5 2.5-1.3 3.8 3.7 3.8 4.1 0 5.1.4 5.6 2 .8 2.6 6.2 7 8.6 7 1.4 0 1.9-.7 1.9-3s-.4-3-2-3c-2.1 0-4-2.7-4-5.9 0-1.9-.6-2.1-6.3-2.1-3.6 0-6.8.5-7.5 1.2zM942.6 85.6c-3 3-1.3 7.4 2.9 7.4 4.4 0 6.3-6 2.6-8-2.7-1.4-3.7-1.3-5.5.6zM907 89.9c0 1.9.5 3.1 1.3 3.1 2 0 4.7 3.3 4.7 5.7 0 1.7.8 2.1 5.8 2.6 4.8.5 6 .3 7.7-1.4 1.7-1.7 1.8-2.1.5-2.9-.8-.5-3.2-1-5.2-1-2.7 0-3.8-.5-4.2-1.8-.9-2.7-4.7-5.9-7.8-6.7-2.6-.7-2.8-.5-2.8 2.4zM967.1 91c-2.4 1.1-6.2 2-8.6 2-2.5 0-4.8.6-5.4 1.4-1 1.2-.7 1.8 1.8 3 4 2.1 7.7 2 13.1-.5 3.3-1.5 5.6-1.9 8.6-1.4 3 .4 4.4.2 5.3-.9 1.1-1.3.7-1.9-2.1-3.6-4.1-2.5-7.1-2.5-12.7 0zM940.8 104.1c-1.6.9-1.8 2.7-1.8 14.4 0 7.7.4 13.5.9 13.5 1.8 0 4.1-3.2 4.1-5.6 0-2.2.4-2.4 4.5-2.4 3.4 0 4.7-.5 5.5-1.9 1.5-3 1.4-3.1-4.5-3.1H944v-8c0-8.2-.2-8.7-3.2-6.9zM958.5 105.6c-5.3 5.7-1.6 14.4 6 14.4 4.9 0 8.5-3.6 8.5-8.5 0-7.8-9.3-11.5-14.5-5.9zm9.5 5.9c0 1.7-3 3.4-4.7 2.8-.7-.3-1.3-1.5-1.3-2.8 0-1.3.6-2.5 1.3-2.8 1.7-.6 4.7 1.1 4.7 2.8zM910.4 107.4c-3.4 3.4-3.4 3.4-3.4 13v9.6h9c5.9 0 10.1-.5 11.8-1.4 7.2-3.7 7.8-16.4 1.1-22-2.5-2.2-4.1-2.6-9.1-2.6-5.5 0-6.3.3-9.4 3.4zm15.9 4.7c2.5 3 2.2 7.5-.8 10.4-1.9 2-3.4 2.5-7.5 2.5h-5.1l.3-6.7c.3-6 .6-6.9 2.8-8.1 3.2-1.6 8-.8 10.3 1.9z" />
          <path d="M916.1 115.9c-1.4 2.5-.5 4.8 2 5.6 2.7.9 5.1-1.3 4.7-4.4-.4-3.4-5.1-4.3-6.7-1.2zM978.2 106.3c-.6.7-1.2 4.9-1.4 9.2l-.3 8-8 .3c-8.2.3-10.5 1.2-10.5 4.2 0 1.5 1 1.6 10.3 1.2 13.7-.6 13.7-.6 13.7-13.9 0-8.1-.3-10.3-1.4-10.3-.7 0-1.8.6-2.4 1.3z" />
        </svg>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}