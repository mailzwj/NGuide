KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('n-guide', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','gallery/n-guide/1.1/']});