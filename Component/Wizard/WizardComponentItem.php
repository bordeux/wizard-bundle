<?php

namespace XVEngine\Bundle\WizardBundle\Component\Wizard;

/**
 * Class WizardComponentItem
 * @author Krzysztof Bednarczyk
 * @package XVEngine\Bundle\WizardBundle\Component\Wizard
 */
class WizardComponentItem implements \JsonSerializable {


    /**
     *
     * @var string
     */
    protected $id;


    /**
     * @var string
     */
    protected $title;

    /**
     * WizardComponentItem constructor.
     * @author Krzysztof Bednarczyk
     * @param string $id
     */
    public function __construct($id, $title = null)
    {
        $this->id = $id;
        !is_null($title) && $this->setTitle($title);
    }


    /**
     * Get id value
     * @author Krzysztof Bednarczyk
     * @return string
     */
    public function getId()
    {
        return $this->id;
    }


    /**
     * Get title value
     * @author Krzysztof Bednarczyk
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set title value
     * @author Krzysztof Bednarczyk
     * @param string $title
     * @return  $this
     */
    public function setTitle($title)
    {
        $this->title = $title;
        return $this;
    }




    /**
     * Specify data which should be serialized to JSON
     * @link http://php.net/manual/en/jsonserializable.jsonserialize.php
     * @return mixed data which can be serialized by <b>json_encode</b>,
     * which is a value of any type other than a resource.
     * @since 5.4.0
     */
    function jsonSerialize()
    {
        return [
            "id" => $this->getId(),
            "title" => $this->getTitle()
        ];
    }
}
