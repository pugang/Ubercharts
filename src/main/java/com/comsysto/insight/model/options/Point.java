package com.comsysto.insight.model.options;

/**
 * Date: Feb 18, 2011 Time: 9:44:10 PM
 *
 * @author Mohammed El Batya
 */
public class Point {

    private String mColor;
    private String mId;
    private String mName;
    private boolean mSliced;
    private Number mX;
    private Number mY;

    public Point(Number pX, Number pY) {
        mX = pX;
        mY = pY;
    }

    public String getColor() {
        return mColor;
    }

    public Point setColor(String pColor) {
        mColor = pColor;
        return this;
    }

    public String getId() {
        return mId;
    }

    public Point setId(String pId) {
        mId = pId;
        return this;
    }

    public String getName() {
        return mName;
    }

    public Point setName(String pName) {
        mName = pName;
        return this;
    }

    public boolean isSliced() {
        return mSliced;
    }

    public Point setSliced(boolean pSliced) {
        mSliced = pSliced;
        return this;
    }

    public Number getX() {
        return mX;
    }

    public Point setX(Number pX) {
        mX = pX;
        return this;
    }

    public Number getY() {
        return mY;
    }

    public Point setY(Number pY) {
        mY = pY;
        return this;
    }
}
