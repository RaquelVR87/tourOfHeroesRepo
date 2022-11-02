const userIdTypes = {
  ADMINISTRADOR: 1,
  MODERADOR: 2
}

const userIdNames = {
  [userIdTypes.ADMINISTRADOR]: "Administrador",
  [userIdTypes.MODERADOR]: "Moderador",
}

export {
  userIdTypes,
  userIdNames
}