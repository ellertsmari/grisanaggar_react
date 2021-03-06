const actionTypes = {
//	USER_LOGGED_IN: 'USER_LOGGED_IN',
    CHANGE_CURRENT_PAGE: 'CHANGE_CURRENT_PAGE',
    UPDATE_CURRENT_USER: 'UPDATE_CURRENT_USER',
    UPDATE_NEWS: 'UPDATE_NEWS',
    GET_WIKI_PAGES: 'GET_WIKI_PAGES',
    GET_PAGES: 'GET_PAGES',

}
//CHANGE_CURRENT_PAGE
export const changeCurrentPage = (page)=>{
    return {type: actionTypes.CHANGE_CURRENT_PAGE, payload:page}
}
//UPDATE_CURRENT_USER
export const updateCurrentUser = (user)=>{
    return {type: actionTypes.UPDATE_CURRENT_USER, payload:user}
}
//UPDATE_NEWS
export const updateNews = (news)=>{
    return {type: actionTypes.UPDATE_NEWS, payload:news}
}
//UPDATE_WIKI_NAV
export const getWikiPages = (wiki)=>{
    return {type: actionTypes.GET_WIKI_PAGES, payload:wiki}
}
//GET_PAGES
export const getPages = (pages)=>{
    return {type: actionTypes.GET_PAGES, payload:pages}
}