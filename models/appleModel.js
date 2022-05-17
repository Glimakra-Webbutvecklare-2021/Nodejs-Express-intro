import fs from "fs";
import path from 'path';

const dbPath = path.resolve() + "/data/apples.json";

const appleModel = {
    getAll: function() {
        return JSON.parse(fs.readFileSync(dbPath, "utf-8"));
    },
    addOne: function(apple) {

        if (!apple) { return false;}

        let apples = this.getAll();

        // apple exists?
        for (let i = 0; i < apples.length; i++) {

            // check apple...
            if (apples[i].apple === apple) {

                return false;
            }
        }

        // create object 
        let obj = {"apple": apple};
        apples.push(obj);

        this.save(apples);
    },
    save: function(data) {

        // save to file...using try-catch
        try {
            fs.writeFileSync(dbPath, JSON.stringify(data), "utf-8");

            return true;
        } catch (error) {
            console.log("error:", error);

            return false;
        }
    }

}

export default appleModel;