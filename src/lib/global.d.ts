import type { Connection } from "mongoose";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


declare global {
    var mongoose_main_conn: Connection | undefined;
    var mongoose_secondary_conn: Connection | undefined;
    var mongoose_tertiary_conn: Connection | undefined;
    var mongoose_forth_conn: Connection | undefined;
    var mongoose_fifth_conn: Connection | undefined;
    var mongoose_sixth_conn: Connection | undefined;
}

export {};
