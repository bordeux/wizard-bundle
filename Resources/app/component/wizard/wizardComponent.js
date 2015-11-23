(function(namespace, app, globals) {


    namespace.wizardComponent = app.newClass({
        extend: function () {
            return app.core.component.abstractComponent;
        }
    });


    /**
     *
     * @returns {$}
     */
    namespace.wizardComponent.prototype.getTemplate = function() {
        var tmplString = app.utils.getString(function() {
            //@formatter:off
            /**<string>
                    <xv-wizard>
                    </xv-wizard>
             </string>*/
            //@formatter:on
        });
        return $(tmplString);
    };

    /**
     *
     * @returns {$}
     */
    namespace.wizardComponent.prototype.getSeperator = function() {
        return app.utils.getString(function() {
            //@formatter:off
            /**<string>
                <svg width="12px" height="50px" version="1.1" xmlns="http://www.w3.org/2000/svg">
                   <defs>
                    <linearGradient id="MyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="#ffffff" />
                      <stop offset="100%" stop-color="#fafafa" />
                    </linearGradient>
                  </defs>
                <polyline points="0,-1  11,25  0,50" />
                </svg>
             </string>*/
            //@formatter:on
        });
    };


    /**
     *
     * @returns {object}
     */
    namespace.wizardComponent.prototype.getDefaultParams = function() {
        return {
            items : [],
            active: null
        };
    };


    /**
     *
     * @returns {undefined}
     */
    namespace.wizardComponent.prototype.init = function() {

        this.setItems(this.params.items);
        this.setActive(this.params.active);
        this.initEvents();
    };

    /**
     *
     * @returns {undefined}
     */
    namespace.wizardComponent.prototype.setItems = function(items) {
        this.$element.html('');
        this.incrementer = 1;
        var self = this;
        items.forEach(function(item){
            self.addItem(item);
        });

        return this;
    };

    namespace.wizardComponent.prototype.addItem = function(item) {
        var $item = $("<a>");
        $item.attr("item-id", item.id);
        $item.attr("href", "#");

        $item.append($("<span>").text(this.incrementer++));
        $item.append($("<span>").html(item.title));
        $item.append(this.getSeperator());

        this.$element.append($item);
    };


    /**
     *
     * @returns {undefined}
     */
    namespace.wizardComponent.prototype.initEvents = function() {
        var self = this;
        this.$element.on("click", "> a", function(){
            self.setActive($(this).attr("item-id"));
            self.trigger("onChange");
            return false;
        });
    };


    /**
     *
     * @returns {undefined}
     */
    namespace.wizardComponent.prototype.setActive = function(id) {
        var $el =  this.$element.find("> a");
        $el.removeClass("active");

        $el.filter(function(){
            return $(this).attr('item-id') == id;
        }).addClass("active");

        return this;
    };

    return namespace.wizardComponent;
})(__ARGUMENT_LIST__);