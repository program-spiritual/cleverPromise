const path = require('path')
/**
 * @class
 * */
class PathWrapper {
  /**
   * @constructor
   * */
  constructor(props) {
//    super(props);

  }

// 文件操作============


  /**
   * 获取当前文件的文件名
   *
   * @param  {string } fileFullPath - 获取当前文件所在的文件夹
   * */
  getFilePath(fileFullPath) {
    return path.dirname(filepath)
  }

  /**
   * 获取文件名称
   * @param {string} fileFullPath - 文件完全路径
   * @param {string} ext - [选填]  要移除的文件拓展名 包含点 例如 .html .js
   * */
  getFileName(fileFullPath, ext) {
    if (!ext) {
      return path.basename(fileFullPath);
    }
    return path.basename(fileFullPath, ext);
  }

  /**
   * 获取文件拓展名
   * @param
   * */
  getFilExtName(fileFullPath) {
    return path.extname(fileFullPath)
  }

//  路径组合=================
  /**
   * 拼接路径
   * @param {ArrayLike} arguments - 字符串类型的参数
   * */
  joinFilePath(...a) {
    return path.join(a.join('/'))
  }

  /**
   * 路径执行 每一步都是一个操作
   * 解析完成之后返回
   * */

  /*  resolveFilePath(a,b,c) {
      return path.resolve(a)
    }*/

  /**
   * 格式化
   *@param  {Object} pathObj -
   * @return {string}
   *
   * @example
   ┌─────────────────────┬────────────┐
   │          dir        │    base    │
   ├──────┬              ├──────┬─────┤
   │ root │              │ name │ ext │
   "  /    home/user/dir / file  .txt "
   └──────┴──────────────┴──────┴─────┘
   * */
  formatFilePath(pathObj) {
    return path.format(pathObj)
  }

  /**
   * 反向格式化
   *@param  {string} fileFullPath  - 完整的文件路径
   *@return {Object}
   * */
  parseFileFullPath(fileFullPath) {
    return path.parse(fileFullPath)
  }

  /**
   * 获取相对路径
   *
   * @param {string} from  - 出发路径
   * @param {string} to   - 目的地李静
   * */
  getRelativePath(from, to) {
    return path.relative(from, to)
  }
}

module.exports = {pathWrapper: new PathWrapper()}
