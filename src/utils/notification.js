export const notify = (title, msg) => {
  console.log(title, msg);
  return new Notification(title, { body: msg });
};
