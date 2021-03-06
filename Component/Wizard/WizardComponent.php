<?php

namespace XVEngine\Bundle\WizardBundle\Component\Wizard;

use XVEngine\Core\Component\AbstractComponent;

class WizardComponent extends AbstractComponent {


    /**
     * @var WizardComponentItem[]
     */
    protected $items = [] ;

    /*
     *
     */
    public function initialize() {
        $this->setComponentName('wizard.wizardComponent');
    }



    public function addItem(WizardComponentItem $item){
        $id = $item->getId();
        if(isset($this->items[$id])){
            unset($this->items[$id]);
        }

        $this->items[$id] = $item;

        return $this;
    }

    /**
     * @author Krzysztof Bednarczyk
     * @param string $id
     * @return null|WizardComponentItem
     */
    public function getItem($id){
        return isset($this->items[$id]) ? $this->items[$id] : null;
    }


    /**
     * @author Krzysztof Bednarczyk
     * @param string $id
     * @return $this
     */
    public function setActive($id){
        return $this->setParam("active", $id);
    }

    /**
     * @author Krzysztof Bednarczyk
     * @return array
     */
    public function jsonSerialize()
    {
        $this->setParam("items", array_values($this->items));
        return parent::jsonSerialize(); // TODO: Change the autogenerated stub
    }


}
