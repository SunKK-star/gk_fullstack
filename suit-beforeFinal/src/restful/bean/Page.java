package restful.bean;

/*
 *className:Page
 *author:fdg
 *data:2020/6/8
 */
public class Page {

    private static int pageSize = 3;
    private int pageNow;

    public Page(int pageNow) {
        this.pageNow = pageNow;
    }
    
    public Page() {
    }
    
    public Page(int pageNow,int pageSize) {
        this.pageNow = pageNow;
        Page.pageSize = pageSize;
    }
    

    public static int getPageSize() {
        return pageSize;
    }

    public static void setPageSize(int pageSize) {
        Page.pageSize = pageSize;
    }

    public int getPageNow() {
        return pageNow;
    }

    public void setPageNow(int pageNow) {
        this.pageNow = pageNow;
    }
}
