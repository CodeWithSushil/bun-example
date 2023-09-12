const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response(`<h2>Hey CodeWithSushil it's me Bun!</h2><p>New JavaScript all-in-one runtime.</p>`);
  },
});

console.log(`Listening on localhost:${server.port}`);