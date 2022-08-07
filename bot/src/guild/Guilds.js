import { readFileSync, writeFileSync } from "fs";


const path = "./src/guild/guilds.json";


class Guilds {

  #datas;

  constructor() {
    this.#datas = this.#load();
  }

  /**
   * 同期(読み込み)
   */
  #load() {
    return new Map(JSON.parse(readFileSync(path, "utf-8")));
  }

  /**
   * 同期(書き込み)
   */
  #sync() {
    writeFileSync(path, JSON.stringify([...this.#datas], null, '  '), err => { });
  }

  /**
   * IDのギルドが存在するかどうか
   * @param {Snowflake} id 
   * @returns {Boolean}
   */
  has(id) {
    return this.#datas.has(id);
  }

  /**
   * IDからギルドデータを取得する
   * @param {Snowflake} id 
   * @returns {Object}
   */
  get(id) {
    return this.#datas.get(id);
  }

  /**
   * IDをKeyにしてギルドデータをセットする
   * @param {Snowflake} id 
   * @param {Object} data 
   */
  set(id, data) {
    this.#datas.set(id, data);
    this.#sync();
  }

}


export default Guilds;